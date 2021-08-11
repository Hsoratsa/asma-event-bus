export function isRecipientJwtClaims(claims) {
    return claims.role === 'RECIPIENT';
}
export function isTherapistJwtClaims(claims) {
    return claims.role === 'THERAPIST' || claims.role === 'SUPER_USER';
}
export function isAdminJwtClaims(claims) {
    return claims.role === 'ADMIN';
}
//# sourceMappingURL=jwtClaims.js.map