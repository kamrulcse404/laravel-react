import { Outlet } from "react-router-dom";

function GuestLayout() {
    return (
        <div>
            <div>
                Guest Layout
                <Outlet />
            </div>
        </div>
    );
}

export default GuestLayout;
