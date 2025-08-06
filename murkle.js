/**
 * Murkle
 * Reddit-new
 * 
 * Hides the comment box. Mainly to keep from adding opinions unless you *really* need to add it. 
 */

const murkle = () => {
    const dbg = true;
    const NEW_SELECTOR_PATH = 'comment-body-header.block > shreddit-async-loader:nth-child(1)';
    const OLD_SELECTOR_PATH = '.usertext-edit'

    const target = document.querySelector(NEW_SELECTOR_PATH) || document.querySelector(OLD_SELECTOR_PATH);
    if (target) target.style.display = 'none';
    else if (dbg) console.error('No comment body header found.');
}

window.setTimeout(murkle, 250);
