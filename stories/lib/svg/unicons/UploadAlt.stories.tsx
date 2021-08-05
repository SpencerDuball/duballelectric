import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UploadAlt, UploadAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UploadAlt",
  component: UploadAlt,
} as ComponentMeta<typeof UploadAlt>;

const Template: ComponentStory<typeof UploadAlt> = (args: UploadAltPropsI) => (
  <x.div display="flex" gap="20px">
    <UploadAlt {...args} />
    <UploadAlt {...args} fill="red.500" />
    <UploadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
