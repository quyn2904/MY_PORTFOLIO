const Homepage = (): JSX.Element => {
  return (
    <div className="mx-auto mt-5 px-5">
      <button
        className="rounded-2xl bg-slate-500 px-8 py-5 text-5xl font-bold text-yellow-500"
        onClick={() => (window.location.href = 'http://ssmcp.quyenpq.work')}
      >
        SSMCP
      </button>
    </div>
  );
};

export default Homepage;
