function validate(email) {
  const valid =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^0-9<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );
  return valid;
}

validate('a@b.cd');
validate('hell.-w.rld@example.com');
validate('.b@sh.rc');
validate('example@test.c0');
validate('freecodecamp.org');
validate('develop.ment_user@c0D!NG.R.CKS');
validate('hello.@wo.rld');
validate('hello@world..com');
validate('git@commit@push.io');
