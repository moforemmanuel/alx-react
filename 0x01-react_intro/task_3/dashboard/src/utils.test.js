import { getFullYear, getFooterCopy, getLatestNotification } from "../../../task_2/dashboard/src/utils";

it('returns correct output', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
    expect(getFooterCopy(true)).toEqual('Holberton School');
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});