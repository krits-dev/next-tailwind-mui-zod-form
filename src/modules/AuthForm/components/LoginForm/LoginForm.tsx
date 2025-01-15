'use client';
import { useRef, useState, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Password } from 'components/ui/TextField/Password';
import { Phone } from 'components/ui/TextField/Phone';
import { Input } from 'components/ui/TextField/Input';
import { InputLabel } from 'constants/ui';
import { Button } from 'components/ui/Button';
import { ButtonText } from 'constants/ui';
import { TermsCheckbox } from './components/TermsCheckbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordMessages } from 'components/ui/TextField/Password/Validation';
import { isEmail, normalizeString } from 'assets/utils';
import { z } from 'zod';

const loginFormSchema = z
  .object({
    email: z.string().nonempty('Enter e-mail').email('Wrong type of e-mail'),
    phone: z
      .string()
      .nonempty('Enter phone number')
      .min(16, 'Format +7 xxx xxx xx xx'),
    password: z
      .string()
      .nonempty(PasswordMessages.required)
      .min(8, PasswordMessages.characters)
      .regex(/[A-Z]/, PasswordMessages.capitalized)
      .regex(/[\d\W_]/, PasswordMessages.number),
    referral: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const emailValid = isEmail(data?.email || '');
    const emailPartIncluded = normalizeString(data?.password || '').includes(
      normalizeString(data?.email?.split('@')[0] || '')
    );

    if (emailValid && emailPartIncluded) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: PasswordMessages.email,
      });
    }
  });

export type LoginFormData = z.infer<typeof loginFormSchema>;

function LoginForm() {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      referral: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const watchedEmail = watch('email');

  const onSubmit: SubmitHandler<LoginFormData> = () => {
    setIsLoading(true);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      reset();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            label={InputLabel.email}
            error={!!errors.email}
            helperText={errors.email?.message}
            renderProps={field}
          />
        )}
      />

      <Controller
        name='phone'
        control={control}
        render={({ field }) => (
          <Phone
            label={InputLabel.phone}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            renderProps={field}
          />
        )}
      />

      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <Password
            errorMessages={errors}
            renderProps={field}
            watchedEmail={watchedEmail}
          />
        )}
      />

      <Controller
        name='referral'
        control={control}
        render={({ field }) => (
          <Input
            label={InputLabel.refCode}
            referral
            error={!!errors.referral}
            helperText={errors.referral?.message}
            renderProps={field}
          />
        )}
      />

      <TermsCheckbox />

      <div className='mt-6'>
        <Button
          text={ButtonText.signup}
          containedBlue
          type='submit'
          loading={isLoading}
          disabled={isLoading}
        />
      </div>
    </form>
  );
}
export default LoginForm;
