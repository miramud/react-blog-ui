import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <div style={{width: '280px', height: '140px'}}>
          <p className="headerTitleSm">Real Estate</p>
          <p className="headerTitleLg">BLOG</p>
        </div>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
    </div>
  );
}