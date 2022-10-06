import { Button, Spinner } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button variant='danger'>My Button</Button>
      <Spinner animation='grow' variant='warning'></Spinner>
      <Button variant="warning" >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          variant='info'
        />
        Loading...
      </Button>
    </div>
  );
}

export default App;
