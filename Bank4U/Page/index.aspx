<%@ Page Title="" Language="C#" MasterPageFile="~/main.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Bank4U.Page.index" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var homeBtn = document.getElementById('nav-button-home');
            if (homeBtn) {
                homeBtn.classList.add('selected-option-innav');
            }
        });
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="home-container">
        <!-- Hero Section -->
        <div class="hero-section">
            <h1 class="hero-title">Welcome to Bank4U</h1>
            <p class="hero-subtitle">Your trusted partner for secure, modern, and fast digital banking. Manage your wealth anywhere, anytime.</p>
            <div class="hero-buttons">
                <a href="signin.aspx" class="btn-primary">Sign In</a>
                <a href="signup.aspx" class="btn-secondary">Open an Account</a>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="features-grid">
            <div class="feature-card">
                <h3>🔒 Top-Tier Security</h3>
                <p>Advanced encryption to keep your deposits, savings, and personal data safe around the clock.</p>
            </div>
            <div class="feature-card">
                <h3>⚡ Instant Transfers</h3>
                <p>Send money to friends, family, or other accounts seamlessly with zero hidden delays.</p>
            </div>
            <div class="feature-card">
                <h3>📈 Smart Investing</h3>
                <p>Track stocks, loans, and balances all in one intuitive dashboard built for your financial growth.</p>
            </div>
        </div>
    </div>

</asp:Content>