import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Okta, OktaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Okta",
  component: Okta,
} as ComponentMeta<typeof Okta>;

const Template: ComponentStory<typeof Okta> = (args: OktaPropsI) => (
  <x.div display="flex" gap="20px">
    <Okta {...args} />
    <Okta {...args} fill="red.500" />
    <Okta {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
