/**
 * Murkle
 * Reddit-new
 * 
 * Hides the comment box. Mainly to keep from adding opinions unless you *really* need to add it. 
 */

const murkle = () => {
    const dbg = true;
    const Selector_Path = 'comment-body-header.block > shreddit-async-loader:nth-child(1)';

    const target = document.querySelector(Selector_Path);
    if (target) target.style.display = 'none';
    else if (dbg) console.error('No comment body header found.');
}

window.setTimeout(murkle, 250);


