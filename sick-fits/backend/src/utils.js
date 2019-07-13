function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter((permissionTheyHave) =>
    permissionsNeeded.includes(permissionTheyHave)
  );

  if (!matchedPermissions.length) {
    try {
      throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
    } catch(err) {
      console.error(`ERROR: ${err}`);

    }
  }
}

exports.hasPermission = hasPermission;
