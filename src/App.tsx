type ButtonProps = {
  title?: string;
};

function Button(props: ButtonProps) {
  return <button className="button">{props.title || `Default`}</button>;
}

function App() {
  return (
    <div className="flex gap-2">
      <Button title="Enviar" />
      <Button title="OK" />
      <Button />
    </div>
  );
}

export default App;
