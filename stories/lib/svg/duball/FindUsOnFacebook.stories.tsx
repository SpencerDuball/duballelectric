import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FindUsOnFacebook, FindUsOnFacebookPropsI } from "lib/svg";

export default {
  title: "lib/svg/duball/FindUsOnFacebook",
  component: FindUsOnFacebook,
} as ComponentMeta<typeof FindUsOnFacebook>;

const Template: ComponentStory<typeof FindUsOnFacebook> = (
  args: FindUsOnFacebookPropsI
) => (
  <x.div display="flex" gap="20px">
    <FindUsOnFacebook {...args} />
    <FindUsOnFacebook {...args} fill="red.500" />
    <FindUsOnFacebook {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "200px", fill: "gray.200" };
