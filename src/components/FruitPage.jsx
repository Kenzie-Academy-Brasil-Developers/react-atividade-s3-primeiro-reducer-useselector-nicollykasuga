import { useSelector } from "react-redux";
import "./style.css";
const FruitPage = () => {
  const fruits = useSelector(state => state.fruits);

  return (
    <div>
      {fruits.map((fruit, index) => {
        return (
          <div className="Container">
            <p className="fruit" key={index}>
              {fruit}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FruitPage;
