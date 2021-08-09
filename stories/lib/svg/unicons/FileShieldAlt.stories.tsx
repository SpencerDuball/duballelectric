import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileShieldAlt, FileShieldAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileShieldAlt",
  component: FileShieldAlt,
} as ComponentMeta<typeof FileShieldAlt>;

const Template: ComponentStory<typeof FileShieldAlt> = (
  args: FileShieldAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileShieldAlt {...args} />
    <FileShieldAlt {...args} fill="red.500" />
    <FileShieldAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
