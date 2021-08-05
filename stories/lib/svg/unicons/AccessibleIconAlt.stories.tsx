import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AccessibleIconAlt, AccessibleIconAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AccessibleIconAlt",
  component: AccessibleIconAlt,
} as ComponentMeta<typeof AccessibleIconAlt>;

const Template: ComponentStory<typeof AccessibleIconAlt> = (
  args: AccessibleIconAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <AccessibleIconAlt {...args} />
    <AccessibleIconAlt {...args} fill="red.500" />
    <AccessibleIconAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
