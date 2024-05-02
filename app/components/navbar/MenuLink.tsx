'use client'
interface MenuLinkProps {
    label: string;
    onClick?: () => void;
    icon?: JSX.Element;

}
const MenuLink: React.FC<MenuLinkProps> = ({
    label, onClick, icon
}) => {
    return (

        <div onClick={onClick}
            className="px-5 py-4 hover:bg-gray-100 transition cursor-pointer flex items-center">
            
            {icon && <div className="mr-2">{icon}</div>}
            <span className="text-sm">{label}</span>
        </div>
    )


}

export default MenuLink;

