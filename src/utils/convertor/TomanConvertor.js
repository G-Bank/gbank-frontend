const TomanConverter = (toman) => {
  return <>{toman === 0 || toman === '0' ? <span>رایگان</span> : `${(toman * 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</>;
};

export default TomanConverter;
