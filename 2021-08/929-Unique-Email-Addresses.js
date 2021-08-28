/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  const forwaredEmailSet = emails.reduce((set, email) => {
    const [local, domain] = email.split('@');
    const filteredLocal = local.split('+')[0].replace(/\./g, '');
    set.add(`${filteredLocal}@${domain}`);
    return set;
  }, new Set());
  return forwaredEmailSet.size;
};
