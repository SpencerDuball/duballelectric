import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GoogleDriveAlt, GoogleDriveAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/GoogleDriveAlt",
  component: GoogleDriveAlt,
} as ComponentMeta<typeof GoogleDriveAlt>;

const Template: ComponentStory<typeof GoogleDriveAlt> = (
  args: GoogleDriveAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <GoogleDriveAlt {...args} />
    <GoogleDriveAlt {...args} fill="red.500" />
    <GoogleDriveAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
