import React, { useEffect } from 'react';

interface EmailFormProps {
  onSubscriptionSuccess: () => void;
}

// IMPORTANT: The div ID "mlb2-26652325" and class "ml-subscribe-form-26652325" 
// must match the ones targeted by MailerLite's CSS and JS.
const mailerLiteFormHtml = `
<div id="mlb2-26652325" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26652325">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent">
          <h4>Join Our Waiting List</h4>
          <p>Be the first to know! Sign up for launch notifications from AURORA9.</p>
        </div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/1561600/forms/155870684527986630/subscribe" data-code="" method="post" target="_blank">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email">
              </div>
            </div>
          </div>
          <div class="ml-form-embedPermissions">
            <div class="ml-form-embedPermissionsContent default privacy-policy">
              <p>You can unsubscribe anytime. For more details, review our Privacy Policy.</p>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Subscribe</button>
            <button disabled="disabled" style="display: none;" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display: none;">
        <div class="ml-form-successContent">
          <h4>Thank you!</h4>
          <p>You have successfully joined our subscriber list.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const EmailForm: React.FC<EmailFormProps> = ({ onSubscriptionSuccess }) => {
  useEffect(() => {
    // Assign the callback to a global function that MailerLite's script can call
    (window as any).triggerReactSubscriptionSuccess = () => {
      onSubscriptionSuccess();
    };

    // Cleanup function to remove the global callback when the component unmounts
    return () => {
      delete (window as any).triggerReactSubscriptionSuccess;
    };
  }, [onSubscriptionSuccess]); // Re-run effect if onSubscriptionSuccess changes

  return (
    <div className="w-full max-w-lg mx-auto mt-8 sm:mt-10" dangerouslySetInnerHTML={{ __html: mailerLiteFormHtml }} />
  );
};

export default EmailForm;