import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Something went iffy</h1>
        <p>Go to <Link href="/"><a>Home</a></Link></p>
 </div>
);

export default errorPage;