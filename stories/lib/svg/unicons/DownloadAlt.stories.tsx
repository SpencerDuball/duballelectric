import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DownloadAlt, DownloadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DownloadAlt",
  component: DownloadAlt,
} as ComponentMeta<typeof DownloadAlt>;

const Template: ComponentStory<typeof DownloadAlt> = (
  args: DownloadAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <DownloadAlt {...args} />
    <DownloadAlt {...args} fill="red.500" />
    <DownloadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
