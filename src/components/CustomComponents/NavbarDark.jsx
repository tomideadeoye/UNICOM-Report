import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { routes, routeLoc } from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{ type: "internal", route: routeLoc.DASHBOARD, label: "Dashboard", color: "info" }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
