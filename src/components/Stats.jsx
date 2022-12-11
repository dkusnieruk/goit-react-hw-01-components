import data from '../json/data.json'

export const Stats = props => {
    console.log(data);
    return (
        <section class="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
  {data.map(props =>
   (
        <li className='item'>
        <span className="label2">{props.label}</span>
        <span className="percentage">{props.percentage}%</span>
        </li>
      ))}
  </ul>
</section>
    );
  };
  