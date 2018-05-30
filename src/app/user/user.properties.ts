/**
 * Reguular expression for username's
 */
export const patternUsername: RegExp = /^[a-zA-z\d\s]{6,32}$/;

/**
 * Reguular expression for lastname's
 */
export const patternLastname: RegExp = /^[a-zA-z\d]{6,32}$/;

/**
 * Reguular expression for email's
 */
export const patternEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Reguular expression for lastname's
 */
export const patternPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[a-zA-z\d]{6,32}$/;

