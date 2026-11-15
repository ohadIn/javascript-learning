<%@ Page Title="" Language="C#" MasterPageFile="~/main.Master" AutoEventWireup="true" CodeBehind="signup.aspx.cs" Inherits="Bank4U.Page.signin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../JavaScript/check-form.js"></script>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        var homeBtn = document.getElementById('nav-button-signup');
        if (homeBtn)
            homeBtn.classList.add('selected-option-innav');
    }); 
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    <!--signup form-->
    <form action="/" method="post" onsubmit="return checkSignupForm()">
        <h2 class="form-header">Sign Up</h2>
        <h3 class="form-subheader">Create your account to get started</h3>
        <table>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Email</span>
                    <span class="form-option-description">Your email here</span>
                </td>
                <td class="form-option-input">
                    <input id="u_email" type="email" name="user-email" placeholder="Enter your email" required="required" />
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Password</span>
                    <span class="form-option-description">Your password here. It must be strong!</span>
                </td>
                <td class="form-option-input">
                    <input id="u_newpassword" type="password" name="user-password" placeholder="Enter a strong password" autocomplete="new-password" required="required" />
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Confirm Password</span>
                    <span class="form-option-description">Enter the password again</span>
                </td>
                <td class="form-option-input">
                    <input id="u_retypedpassword" type="password" name="user-password-retype" placeholder="Retype your password" autocomplete="new-password-retype" required="required" />
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Full Name</span>
                    <span class="form-option-description">Fill your full name (First name Last name)</span>
                </td>
                <td class="form-option-input">
                    <input id="u_fullname" type="text" name="user-fullname" placeholder="Enter your full name" required="required" />
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Gender</span>
                    <span class="form-option-description">Choose your gender from here</span>
                </td>
                <td class="form-option-input">
                    <select id="u_gender" name="user-gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="private">Prefer not to answer</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Phone Number</span>
                    <span class="form-option-description">Write that number of your cellphone here</span>
                </td>
                <td class="form-option-input">
                    <select id="u_phoneprefix" name="phonenum">
                        <option value="phonenum-prefix-il">+972</option>
                        <option value="phonenum-prefix-usa">+1</option>
                    </select>
                    <input id="u_phonenumber" type="number" name="user-phonenum" placeholder="Phone number" min="500000000" max="599999999" required="required" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input id="button-submit" type="submit" name="submit-button" value="Submit" formmethod="post" />
                </td>
            </tr>
        </table>
    </form>

</asp:Content>
