type MyButtonProps = {
  titulo: string;
  onClick: () => void;
};
  
export function MyButton({ titulo, onClick }: MyButtonProps) {
  return <button onClick={onClick}>{titulo}</button>;
};