import Routes from "./components/routes";
import { ReduxLayout, ScrollerLayout, ThemeLayout } from "./components/layouts";
function App(): JSX.Element {
    return (
        <ScrollerLayout>
            <ReduxLayout>
                <ThemeLayout>
                    <Routes />
                    {/* MainLayout is inside of Routes for index page of project "/" */}
                </ThemeLayout>
            </ReduxLayout>
        </ScrollerLayout>
    );
}

export default App;
