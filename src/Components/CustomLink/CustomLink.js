import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyles = {
        color: match ? '#FFAA89' : '',
    }

    return (
        <div>
            <Link style={activeStyles} className='text-green-100 block text-center text-lg border-2 border-slate-900 hover:border-red-400 px-4 py-1 rounded-lg font-semibold'
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;