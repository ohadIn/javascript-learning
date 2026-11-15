<%@ Page Title="" Language="C#" MasterPageFile="~/main.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Bank4U.Page.login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        var homeBtn = document.getElementById('nav-button-login');
        if (homeBtn) {
            homeBtn.classList.add('selected-option-innav');
        }
    });
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    <!--login form-->
    <form action="/" method="post">
        <h2 class="form-header">Log in</h2>
        <h3 class="form-subheader">Log into your existing account.</h3>
        <table>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Email</span>
                    <span class="form-option-description">Your email here</span>
                </td>
                <td class="form-option-input">
                    <input type="email" name="user-email" placeholder="Enter your email" required="required" />
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Password</span>
                    <span class="form-option-description">Enter your password here</span>
                </td>
                <td class="form-option-input">
                    <input type="password" name="user-password" placeholder="Enter your password" autocomplete="password" required="required" />
                </td>
            </tr>
            <tr>
                <td class="form-option-info">
                    <span class="form-option-name">Confirm Password</span>
                    <span class="form-option-description">Enter the password again</span>
                </td>
                <td class="form-option-input">
                    <input type="password" name="user-password-retype" placeholder="Retype your password" autocomplete="password-retype" required="required" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" name="submit-button" value="Submit" formmethod="post" />
                </td>
            </tr>
        </table>
    </form>

</asp:Content>
