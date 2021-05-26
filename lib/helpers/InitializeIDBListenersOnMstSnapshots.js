import { del, get, set } from 'idb-keyval';
import { applySnapshot, onSnapshot } from 'mobx-state-tree';
function setIDBListenersOnSnapshots(store, omit = []) {
    const keys = Object.keys(store).filter((k) => !omit.includes(k));
    keys.forEach((key) => {
        if (typeof store[key] === 'object') {
            onSnapshot(store[key], (snapshot) => {
                set(String(key), snapshot).catch((e) => console.error(e));
            });
        }
    });
}
async function checkForIDBData(main_store) {
    const keys = Object.keys(main_store);
    const stores_promises = [];
    const promises = keys.reduce((acc, key) => {
        if (typeof main_store[key] === 'object')
            acc.push(applySnapshotOnResolvedIDBGetPromise(key, main_store));
        return acc;
    }, stores_promises);
    await Promise.allSettled(promises);
}
export function initiatieIDBListenersOnSnaphsots(store, omit = []) {
    setIDBListenersOnSnapshots(store, omit);
    return checkForIDBData(store);
}
async function applySnapshotOnResolvedIDBGetPromise(key, main_store) {
    try {
        const res = await get(String(key));
        if (res) {
            applySnapshot(main_store[key], res);
        }
    }
    catch (e) {
        del(String(key));
        console.error(`resolveIDBGetPromise, ${key}:`, e);
    }
}
//# sourceMappingURL=InitializeIDBListenersOnMstSnapshots.js.map