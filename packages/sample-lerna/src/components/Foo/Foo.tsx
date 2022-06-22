import './Foo.scss';

export type FooType = {
  name: string;
};

const Foo: React.FC<FooType> = ({ name }) => {
  return (
    <div className="foo">
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {name} Button
      </button>
    </div>
  );
};

export default Foo;
