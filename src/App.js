import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publidRoutes } from './routes/routes';
import DefaultLayout from './layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publidRoutes.map(({ path, component, layout }, index) => {
                        const Layout = layout === null ? Fragment : DefaultLayout;
                        const Page = component;
                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
