const TomanConverter = (Rial) => {
  return <>{Rial === 0 || Rial === '0' ? <span>رایگان</span> : `${(Rial / 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</>;
};

export default TomanConverter;
