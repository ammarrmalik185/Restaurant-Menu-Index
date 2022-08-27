import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import Canvas from 'react-native-canvas';

export default function App() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            ctx.fillStyle = 'red';
            ctx.fillRect(20, 20, 100, 100);
        }
    }, [ref]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Canvas style={{ width: '100%', height: '100%', backgroundColor: 'black' }} ref={ref} />
        </SafeAreaView>
    );
}
