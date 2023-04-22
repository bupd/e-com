import './menu-item.styles.scss';

const MenuItem = ({ title }) => (
    <div className="menu-item">
    <div className="content">
        <h1 className="title">{ title }</h1>
        <span className="content">specs</span>
    </div>
</div>

);

export default MenuItem;