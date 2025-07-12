/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, lazy, LazyExoticComponent, ComponentType } from "react";

interface DynamicOptions {
    importFn: () => Promise<{ default: ComponentType<any> }>;
    fallBack?: React.ReactNode;
}

export function dynamic({ importFn, fallBack }: DynamicOptions): ComponentType<any> {
    const LazyComponent: LazyExoticComponent<ComponentType<any>> = lazy(importFn);
    return function DynamicWrapper(props: any) {
        return (
            <Suspense fallback={fallBack ?? null}>
                <LazyComponent {...props} />
            </Suspense>
        );
    };
}
