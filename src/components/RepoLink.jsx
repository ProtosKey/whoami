import BracketLink from './BracketLink';

export default function RepoLink({ path, className }) {
  return (
    <BracketLink href={`https://github.com/${path}`} external className={className}>
      {`github.com/${path}`}
    </BracketLink>
  );
}
