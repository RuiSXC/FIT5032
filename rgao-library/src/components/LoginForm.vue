<template>
  <div class="form">
    <h1>User Information Form / Credentials</h1>
    <form action="">
      <label for="username">Username:</label><br />
      <input type="text" name="username" id="username" /><br />

      <label for="password">Password:</label><br />
      <input type="password" name="password" id="password" /><br />

      <label for="isAustralian">isAustralian Resident?</label><br />
      <input type="checkbox" id="isAustralian" name="isAustralian" /><br />

      <label for="reason">Reason For Joining:</label><br />
      <textarea name="reason" id="reason" rows="3"></textarea><br />

      <label for="gender">Gender</label><br />
      <select name="" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
