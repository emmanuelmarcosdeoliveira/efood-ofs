import { TagContainer } from './styles';

export type TagProps = {
  children: string;
  padding: 'smal' | 'medium';
};
const Tag = ({ children, padding = 'smal' }: TagProps) => {
  return <TagContainer padding={padding}>{children}</TagContainer>;
};

export default Tag;
