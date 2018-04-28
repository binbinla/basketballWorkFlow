

/**
 * 
 */
export function getCookie(cname) {
  let name = cname + '=';
  const ca = cname.split(';');
  for (let i = 0; i < ca.length; i++) {
    let tt = ca[i];
    while ( tt.charAt(0) === ' ' ) tt = tt.substring(1);
    if (tt.indexOf(name) !== -1) {
      return tt.substring(name.length, tt.length);
    }
  }
  return '';
}