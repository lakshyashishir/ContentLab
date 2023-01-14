import './App.css';
import Column from './components/Column/Column'

const mockData = [
  {
    title: 'To DO',
    tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    color: '#d88469',
    input: '',
  },
  {
    title: 'In progress',
    tasks: ['Task 5', 'Task 6'],
    color: '#c39757',
    input: '',
  },
  {
    title: 'Done',
    tasks: ['Task 7', 'Task 8', 'Task 9'],
    color: '#45904f',
    input: '',
  }
]

const getColumnSection = () => (
  <section className="columns">
    <Column
      itemList={mockData[0].tasks}
      colTitle={mockData[0].title}
      color={mockData[0].color}
      />
    <Column
      itemList={mockData[1].tasks}
      colTitle={mockData[1].title}
      color={mockData[1].color}
      />
    <Column
      itemList={mockData[2].tasks}
      colTitle={mockData[2].title}
      color={mockData[2].color}
      />
  </section>
);

function Board1() {
  return (
    <div className="app">

      {getColumnSection()}
      
    </div>
  );
}

export default Board1;
