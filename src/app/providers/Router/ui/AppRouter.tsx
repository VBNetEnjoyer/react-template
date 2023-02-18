import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/Router/lib/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Идет загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
