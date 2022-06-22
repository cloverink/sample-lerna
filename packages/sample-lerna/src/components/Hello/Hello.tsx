export type HelloType = {
  name: string;
  color?: string;
};

const Hello: React.FC<HelloType> = ({ name, color }) => (
  <div
    className="text-3xl font-bold underline hello"
    style={color && { color }}
  >
    Hello, {name}
  </div>
);

export default Hello;
