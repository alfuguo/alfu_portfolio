import Link from "next/link";

const BackBtn = () => {
  return (
    <div className="back-btn">
      <Link href="/">
        <i className="ti-arrow-left" />
      </Link>
    </div>
  );
};

export default BackBtn;