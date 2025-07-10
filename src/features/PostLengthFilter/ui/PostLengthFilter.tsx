import { useState } from "react";
import styles from "./PostlengthFilter.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";

type IProps = {
  setFilterData: React.Dispatch<
    React.SetStateAction<{
      min: number;
      max: number;
    } | null>
  >;
};

export default function PostLengthFilter(props: IProps) {
  const { setFilterData } = props;
  const { theme } = useTheme();
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(20);
  const [showError, setShowError] = useState(false);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = event.currentTarget.value;
    setMinValue(Number(newMinValue));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = event.currentTarget.value;
    setMaxValue(Number(newMaxValue));
  };

  const validateInput = (input: number) => {
    const strInput = input.toString();
    const regex = /^[1-9][0-9]?[0-9]?$/;
    return regex.test(strInput);
  };

  const showErrorIput = () => {
    setShowError(true);
  };

  const handleChangeFilrer = () => {
    if (validateInput(minValue) && validateInput(maxValue)) {
      setShowError(false);
      setFilterData({ min: minValue, max: maxValue });
    } else showErrorIput();
  };

  const handleResetFilter = () => {
    setShowError(false);
    setFilterData(null);
    setMinValue(1);
    setMaxValue(20);
  };

  return (
    <>
      <h5 className={styles.title}>Фильтрация по длине заголовка:</h5>
      <div className={styles.container}>
        <div>
          <p className={styles.placeholder}>min</p>
          <input
            className={styles.input}
            type="number"
            value={minValue}
            onChange={handleMinChange}
          />
        </div>
        <div>
          <p className={styles.placeholder}>max</p>
          <input
            className={styles.input}
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
          />
        </div>
      </div>
      {showError && (
        <p className={styles.error}>Поля могут содержать до трех цифр и не могут начинаться с 0!</p>
      )}
      <div className={styles.container}>
        <button
          className={`${
            theme === "light" ? `${styles.buttonLight}` : `${styles.buttonDark}`
          } ${styles.button}`}
          onClick={handleChangeFilrer}
        >
          Применить
        </button>
        <button
          className={`${
            theme === "light" ? `${styles.buttonLight}` : `${styles.buttonDark}`
          } ${styles.button}`}
          onClick={handleResetFilter}
        >
          Сбросить
        </button>
      </div>
    </>
  );
}
