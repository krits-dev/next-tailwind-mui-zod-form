import cn from 'classnames';
import { PageTitleType } from 'constants/pages';

interface IProps {
  className?: string;
  h1?: boolean;
  h2?: boolean;
  titleText: PageTitleType;
}

function Title({ className = '', h1, h2, titleText }: IProps) {
  return (
    <>
      {h1 && <h1 className={cn('text-title', className)}>{titleText}</h1>}
      {h2 && <h2>{titleText}</h2>}
    </>
  );
}
export default Title;
