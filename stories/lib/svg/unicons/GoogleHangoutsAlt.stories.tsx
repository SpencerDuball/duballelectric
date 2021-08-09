import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GoogleHangoutsAlt, GoogleHangoutsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GoogleHangoutsAlt",
  component: GoogleHangoutsAlt,
} as ComponentMeta<typeof GoogleHangoutsAlt>;

const Template: ComponentStory<typeof GoogleHangoutsAlt> = (
  args: GoogleHangoutsAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <GoogleHangoutsAlt {...args} />
    <GoogleHangoutsAlt {...args} fill="red.500" />
    <GoogleHangoutsAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
