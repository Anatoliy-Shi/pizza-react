import './App.css';
import {Header} from './components/header/Header';
import {Content} from "./components/pages/Content";
import {Route, Routes} from 'react-router-dom';
import {FC, lazy, Suspense} from "react";
import {Loader} from "./components/content/pizza/Loader";

const Basket = lazy(() => import("./components/pages/Basket"));
const NotFound = lazy(() => import('./components/pages/NotFound/NotFound'));

export const App: FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path='/pizza-react' element={<Content/>}/>
                        <Route path='/basket' element={<Basket/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

